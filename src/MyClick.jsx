const handleClicked = () => {
    console.log('clicked');
    setCount(count + 1);
}

<div>
    <button type="button" onClick={handleClicked}>Click</button>
</div>