# topdown basic godot

```
extends KinematicBody2D

export var walking_speed = 200 # px per s

func _ready():
  pass # Replace with function body.

func _process(delta):
  var move_direction = Vector2.ZERO
  
  if Input.is_action_pressed("move_down"):
    move_direction += Vector2.DOWN
  
  if Input.is_action_pressed("move_up"):
    move_direction += Vector2.UP
  
  if Input.is_action_pressed("move_left"):
    move_direction += Vector2.LEFT
  
  if Input.is_action_pressed("move_right"):
    move_direction += Vector2.RIGHT
  
  move_and_slide(move_direction.normalized() * walking_speed)
```