interface ArrowProps {
  color?: string;
}

export const Arrow = ({ color = "#2F2F2F" }: ArrowProps) => (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.33341L5.66667 6.00008L1 10.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>
);
