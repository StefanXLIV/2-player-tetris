function createPiece(type) {
    if (type === 'T') {
        return  [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    }   else if (type === 'O') {
        return  [
            [2, 2],
            [2, 2],   
        ];
    } else if (type === 'L') {
        return  [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ];
    } else if (type === 'J') {
        return  [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ];
    } else if (type === 'I') {
        return  [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
         ];
        } else if (type === 'S') {
            return  [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        } else if (type === 'Z') {
            return  [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0],
            ];
    }
}

const game = [];

const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(element => {
    const tetris = new Tetris(element);
    game.push(tetris);
})

const keyListener = (event => {
        [
            [37, 39, 188, 190, 40],
            [65, 68, 90, 88, 83],
        ].forEach((key, index) => {
            const player = game[index].player;
            if(event.type === 'keydown') {
            if(event.keyCode === key[0]) {
                player.move(-1);
            }
            else if(event.keyCode === key[1]) {
                player.move(1);
            }
            else if(event.keyCode === key[2]) {
                player.rotate(-1);  
            }
            else if(event.keyCode === key[3]) {
                player.rotate(1);
            }    
        }
           
            if (event.keyCode === key[4]) {
                if (event.type === 'keydown') {
                    if (player.dropInterval !== player.DROP_FAST) {
                        player.drop();
                        //prvo iskljucimo mogucnost da drop_fast vec aktiviran pa tek onda pozivamo player_drop, kako ne bi imali dupli drop_fast!
                    }
                    } else {
                        player.dropInterval = player.DROP_SLOW;
                    }
                }
                
            
        });
});

document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);