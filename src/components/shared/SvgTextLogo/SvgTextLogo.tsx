import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  textAnchor?: 'start' | 'middle' | 'end';
  dominantBaseline?: 'auto' | 'middle' | 'hanging';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 0,
  textAnchor = 'middle',
  dominantBaseline = 'middle',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const width = textLength * charWidth + 40;
  const height = fontSize + 40;
  const xPos = width / 2;
  const yPos = height / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x={xPos}
        y={yPos}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        textAnchor={textAnchor}
        dominantBaseline={dominantBaseline}
        className="fill-current"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
