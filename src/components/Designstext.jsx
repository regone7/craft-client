import { useTypewriter } from 'react-simple-typewriter'

const Designstext = () => {
    const [text] = useTypewriter({
        words: ['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting','Charcoal Sketching','Cartoon Drawing'],
        loop: 0
      })
    return (
        <div>
            <div className='App'>
                In this website about Painting and Drawing...
                <span className='text-green-500'>{text}</span>
            </div>
        </div>
    );
};

export default Designstext;