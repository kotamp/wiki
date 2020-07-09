# Enums in Godot

## Globally accessible

    enum { left, right, front, back }
    
    # same as
    const left = 0
    const right = 1
    const front = 2
    const back = 3

## Change order

    enum { left, right, front = 10, back }
    
    # same as
    const left = 0
    const right = 1
    const front = 10
    const back = 11

## Not globally set

    enum MoveSet {left, right, front, back}
    
    MoveSet.right # 1