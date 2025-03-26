const icons = {
    currency: (
        <div>
            <span className="sr-only">Currency icon</span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 6V18M9 15.1818L9.87887 15.841C11.0504 16.7197 12.9498 16.7197 14.1214 15.841C15.2929 14.9623 15.2929 13.5377 14.1214 12.659C13.5355 12.2196 12.7677 12 11.9999 12C11.275 12 10.5502 11.7804 9.99709 11.341C8.891 10.4623 8.891 9.03772 9.9971 8.15904C11.1032 7.28036 12.8965 7.28036 14.0026 8.15904L14.4175 8.48863M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    ),
    search: (
        <div>
            <span className="sr-only">Search icon</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        </div>
    ),
    heart: (
        <div>
            <span className="sr-only">Heart icon</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        </div>
    ),
    externalLink: (
        <div>
            <span className="sr-only">External Link icon</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
            >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344z" />
            </svg>
        </div>
    ),
    plane: (
        <div>
            <span className="sr-only">Plane icon</span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.99972 12L3.2688 3.12451C9.88393 5.04617 16.0276 8.07601 21.4855 11.9997C16.0276 15.9235 9.884 18.9535 3.26889 20.8752L5.99972 12ZM5.99972 12L13.5 12"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    ),
    location: (
        <div>
            <span className="sr-only">Location icon</span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.832 2.688A4.056 4.056 0 0 0 8.02 1.5h-.04a4.056 4.056 0 0 0-4 4c-.013.75.198 1.487.606 2.117L7.734 14h.533l3.147-6.383c.409-.63.62-1.367.606-2.117a4.056 4.056 0 0 0-1.188-2.812zM7.925 2.5l.082.01.074-.01a3.075 3.075 0 0 1 2.941 3.037 2.74 2.74 0 0 1-.467 1.568l-.02.034-.017.035L8 12.279l-2.517-5.1-.017-.039-.02-.034a2.74 2.74 0 0 1-.467-1.568A3.074 3.074 0 0 1 7.924 2.5zm.612 2.169a1 1 0 1 0-1.112 1.663 1 1 0 0 0 1.112-1.663zM6.87 3.837a2 2 0 1 1 2.22 3.326 2 2 0 0 1-2.22-3.326z"
                />
            </svg>
        </div>
    ),
    backArrow: (
        <div>
            <span className="sr-only">Back Arrow icon</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
            >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80z" />
            </svg>
        </div>
    ),
    forwardArrow: (
        <div>
            <span className="sr-only">Forward Arrow icon</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
            >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56z" />
            </svg>
        </div>
    ),
    discount: (
        <div>
            <span className="sr-only">Discount icon</span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.60962 12.6877L11.6096 2.68765L12.3905 3.31235L4.39049 13.3123L3.60962 12.6877Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5 12.5C10.6716 12.5 10 11.8284 10 11C10 10.1716 10.6716 9.5 11.5 9.5C12.3284 9.5 13 10.1716 13 11C13 11.8284 12.3284 12.5 11.5 12.5ZM11.5 13.5C12.8807 13.5 14 12.3807 14 11C14 9.61929 12.8807 8.5 11.5 8.5C10.1193 8.5 9 9.61929 9 11C9 12.3807 10.1193 13.5 11.5 13.5Z"
                />
            </svg>
        </div>
    ),
};

export default icons;
