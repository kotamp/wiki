# Dictionary

    var <name> = {<key> : <value>, ...}

    var empty = {}
    var dict  = {"name": "John"}
    var another = {1: "Same"}
    var complex = {1: [1,2,3]}

## Accessing

    dict["name"] # "John"
    another[1]   # "Same"

## Add key/value

    dict.newKey = 100
    dict["newKey"] = 100
    dict[1] = 100

## Comparisons

    dict1 = {"key": [1,2,3,4]}
    dict2 = {"key": [1,2,3,4]}

    dict1 == dict2 # false
    dict1.hash() == dict2.hash() # true

## Other

    dict.clear()
    dict.erase("key")