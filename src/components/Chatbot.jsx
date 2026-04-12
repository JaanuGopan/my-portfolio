import React, { useState, useRef, useEffect } from 'react';
import { Groq } from 'groq-sdk';
import ReactMarkdown from 'react-markdown';
import styles from './Chatbot.module.css';

// Initialize Groq client
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // Required for frontend usage
});

const SYSTEM_PROMPT = `You are the AI assistant for Janugopan Sundaramoorthy's portfolio website.
You are a helpful, professional, and concise chatbot. You answer questions directly based on the following facts about Janugopan:
- He is a Computer Engineering graduate from the University of Ruhuna, Sri Lanka (BSc Hons, GPA 3.45/4.0, 2021-2025).
- He builds full-stack systems focusing on scalability, security, and clean architecture.
- Technical Skills: Frontend (React.js, Flutter), Backend (Spring Boot, FastAPI, Node.js), Databases (PostgreSQL, MongoDB), AI/ML (PyTorch, LLMs), DevOps (Docker, GitHub Actions, AWS).
- Languages: Java, Python, TypeScript, C++.
- He has 6 months of industry internship experience and has built 5+ major projects.
- He is currently open to full-time and freelance roles in Full Stack Development, AI/ML, and DevOps.

Rules:
1. Be polite and concise.
2. Only provide information that is related to Janugopan based on the facts provided above.
3. If asked something unknown, politely state that you only have information regarding Janugopan's professional portfolio.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! Do you have any questions about Janugopan's background, skills, or projects?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [projectContext, setProjectContext] = useState(null);
  const messagesEndRef = useRef(null);

  const userMessageCount = messages.filter(m => m.role === 'user').length;
  const isLimitReached = userMessageCount >= 5;

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpenChat = (e) => {
      setIsOpen((prevIsOpen) => true);
      
      if (e.detail && e.detail.project) {
        const p = e.detail.project;
        
        setProjectContext(
          `The user is currently viewing the project: "${p.name}".\n` +
          `Short Description: ${p.shortDesc}\n` +
          `Full Description: ${p.fullDesc}\n` +
          `Highlights: ${p.highlights.join(', ')}\n` +
          `Technologies used: ${p.tags.join(', ')}\n` +
          `You should act as an assistant ready to answer questions specifically about this project based on these details.`
        );
        
        const welcomeMsg = `I see you are looking at the **${p.name}** project! Feel free to ask me any questions about it.`;
        
        // Inform user that the bot is ready for project questions, but prevent duplicates
        setMessages((prev) => {
          if (prev.some((msg) => msg.content === welcomeMsg)) {
            return prev;
          }
          return [...prev, { role: 'assistant', content: welcomeMsg }];
        });
      }
    };
    
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || isLimitReached) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Add a temporary empty assistant message that we will stream into
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      // Construct API payload history
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT + (projectContext ? '\n\n' + projectContext : '') },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        userMessage,
      ];

      const chatCompletion = await groq.chat.completions.create({
        messages: apiMessages,
        model: 'openai/gpt-oss-120b', // Specific model requested
        temperature: 0.7,
        max_completion_tokens: 1024,
        top_p: 1,
        stream: true,
      });

      // Stream the response
      let fullResponse = '';
      for await (const chunk of chatCompletion) {
        const delta = chunk.choices[0]?.delta?.content || '';
        fullResponse += delta;

        // Update the last message in state with the new chunk
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error fetching chat completion:', error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'Oops! I encountered an error connecting to my brain. Please check your API key or try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Floating Toggle Button */}
      <button 
        className={styles.toggleButton} 
        onClick={handleToggle}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
          // Close Icon
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          // Chat Bubble Icon
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>AI Assistant</h3>
          </div>
          
          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={msg.role === 'user' ? styles.userMessageWrapper : styles.assistantMessageWrapper}
              >
                <div className={msg.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                  {msg.role === 'assistant' ? (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={styles.assistantMessageWrapper}>
                <div className={`${styles.assistantMessage} ${styles.loadingDots}`}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
            )}
            
            {isLimitReached && (
              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Message limit reached. Please use the contact page for further inquiries!
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={isLimitReached ? "Limit reached" : "Ask me anything about Janugopan..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading || isLimitReached}
            />
            <button type="submit" disabled={!inputValue.trim() || isLoading || isLimitReached} className={styles.sendButton}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
