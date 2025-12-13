type IconProps = {
    className?: string;
    strokeWidth?: number;
};

export const ArrowBearRight = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg" 
            width={24} 
            height={24} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3h5v5" />
            <path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
        </svg>
    );
};

export const ChevronRight = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg" 
            width={24} 
            height={24} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
        </svg>
    );
};

export const ChevronLeft = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15 6l-6 6l6 6" />
        </svg>
    );
};

export const ChevronUpRight = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 8h8v8" />
        </svg>
    );
};

export const ChevronDownRight = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 16h8" />
        </svg>
    );
};

export const SquareRoundedPlus = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        <path d="M15 12h-6" />
        <path d="M12 9v6" />
        </svg>
    );
};

export const Instagram = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M16.5 7.5v.01" />
        </svg>
    );
};

export const Whatsapp = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
        </svg>
    );
};

export const Email = ({ className, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg 
            className={className} 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
        </svg>
    );
};