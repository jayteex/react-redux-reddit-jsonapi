import React, { useEffect, useState } from 'react';

interface TruncatedH2Props {
  text: string;
  maxChars: number;
}

//Utility component to limit the characters of the headline of the Posts 
const TruncatedH2: React.FC<TruncatedH2Props> = ({ text, maxChars }) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxChars) {
      setTruncatedText(`${text.substring(0, maxChars)}...`);
    }
  }, [text, maxChars]);

  return <h2>{truncatedText}</h2>;
};

export default TruncatedH2;
