interface ProductButtonProps {
    onPress: () => void;
}

const ProductButton:React.FC<ProductButtonProps> = ({onPress}) => {
  return (
    <button
      onClick={onPress}
      type="button"
      className="flex items-center text-white justify-between"
    >
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        fill="currentColor"
        width="16"
        data-view-component="true"
        className="octicon octicon-sync mr-2"
      >
        <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
      </svg>
      Replay
    </button>
  );
}

export default ProductButton