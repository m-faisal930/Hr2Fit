import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBold, 
  FaItalic, 
  FaUnderline, 
  FaListUl, 
  FaListOl, 
  FaQuoteLeft,
  FaHeading,
  FaLink,
  FaUnlink
} from 'react-icons/fa';

const RichTextEditor = ({ value, onChange, placeholder = "Start writing your HR insights..." }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Set content when value changes or component mounts
  useEffect(() => {
    if (editorRef.current && value !== undefined) {
      const currentContent = editorRef.current.innerHTML;
      const newContent = value || '';
      
      console.log('RichTextEditor: Setting content', { value, newContent, currentContent });
      
      // Update content if it's different
      if (currentContent !== newContent) {
        editorRef.current.innerHTML = newContent;
      }
    }
  }, [value]);

  // Set initial content when component mounts
  useEffect(() => {
    if (editorRef.current && value !== undefined) {
      console.log('RichTextEditor: Initial mount, setting content', { value });
      editorRef.current.innerHTML = value || '';
    }
  }, []); // Empty dependency array for initial mount only

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      formatText('createLink', url);
    }
  };

  const removeLink = () => {
    formatText('unlink');
  };

  const handleInput = () => {
    if (onChange && editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const toolbarButtons = [
    { icon: FaBold, command: 'bold', label: 'Bold' },
    { icon: FaItalic, command: 'italic', label: 'Italic' },
    { icon: FaUnderline, command: 'underline', label: 'Underline' },
    { icon: FaHeading, command: 'formatBlock', value: '<h2>', label: 'Heading' },
    { icon: FaListUl, command: 'insertUnorderedList', label: 'Bullet List' },
    { icon: FaListOl, command: 'insertOrderedList', label: 'Numbered List' },
    { icon: FaQuoteLeft, command: 'formatBlock', value: '<blockquote>', label: 'Quote' },
    { icon: FaLink, action: insertLink, label: 'Insert Link' },
    { icon: FaUnlink, action: removeLink, label: 'Remove Link' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rich-text-editor"
    >
      {/* Toolbar */}
      <div className="bg-gray-50 border border-gray-200 rounded-t-lg p-2 flex flex-wrap gap-1">
        {toolbarButtons.map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => button.action ? button.action() : formatText(button.command, button.value)}
            className="p-2 rounded hover:bg-gray-200 transition-colors duration-200 text-gray-600 hover:text-gray-800"
            title={button.label}
          >
            <button.icon className="w-4 h-4" />
          </motion.button>
        ))}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          min-h-[300px] p-4 border border-gray-200 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${isFocused ? 'bg-white' : 'bg-gray-50'}
          ${!value && 'text-gray-400'}
        `}
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          lineHeight: '1.6',
          direction: 'ltr',
          textAlign: 'left',
          unicodeBidi: 'embed',
          writingMode: 'horizontal-tb'
        }}
        data-placeholder={placeholder}
      />
    </motion.div>
  );
};

export default RichTextEditor; 