import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        canvasWidth: 1920,
        canvasHeight: 1118,
        windowHeight: 1080,
    },
});
