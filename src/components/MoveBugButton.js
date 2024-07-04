const MoveBugButton = ({ moveBug, timer, player }) => {
    return (
      <button className="move" disabled={timer === 0 || !player} onClick={() => moveBug()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-up"><path d="M9 18v-6H5l7-7 7 7h-4v6H9z"/></svg>
      </button>
    );
  }

export default MoveBugButton;