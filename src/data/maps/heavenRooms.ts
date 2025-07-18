import type { Room } from "../type";

export const heavenRooms: Room[] = [
    {
        "id": "Heaven Court Yard",
        "description": "A serene, celestial realm filled with soft clouds and gentle light. The air is filled with a sense of peace and tranquility.",
        "connectedRooms": ["History Hall"],
        "inViewRooms": ["History Hall"],
        "width": 9,
        "height": 9,
        "characterIdList": ["Jesus"],
        "furnitureIdList": ["Magic trees"]
    },
    {
        "id": "History Hall",
        "description": "A small hall filled with the history of heaven, with paintings and artifacts from various eras. The walls are lined with portraits of previous Jesus in golden frames.",
        "connectedRooms": ["Heaven Court Yard"],
        "width": 5,
        "height": 5
    }
]
