elements.uranium_235 = {
        color: ["#232922", "#0d4a03", "#7eff69", "#0d140c", "#3d3d3d", "#969696"]
        behavior: behaviors.RADPOWDER,
        category: powders,
        state: powder,
        tempHigh: 1,355,
        burnTime: 30,
        stateHigh: molten_uranium-235,
         "XX|CR:radiation%2|XX"
        "CR:radiation%2|CH:lead%0.002|CR:radiation%2",
        "M2|M1|M2",
    ],
        reactions: {
                "neutron": { elem1: "barium-141", elem2: "krypton-92" },
};

elements.barium-141 = {
        color: ["#232922", "#0d4a03", "#7eff69", "#0d140c", "#3d3d3d", "#969696"],
        reactions: {
		        "neutron": { elem1:"n_explosion", tempMin:500, chance:0.1 },
        }
};

elements.krypton-92 = {
        color: ["#6a5173", "#2d1436"],
        category: gases
        state: gas
};

elements.uranium_235 = {
        color: ["#232922", "#0d4a03", "#7eff69", "#0d140c", "#3d3d3d", "#969696"]
        behavior: behaviors.RADMOLTEN,
        category: powders,
        state: powder,
        tempHigh: 1,355,
        burnTime: 30,
        stateHigh: molten_uranium-235,
         "XX|CR:radiation%2|XX"
        "CR:radiation%2|CH:lead%0.002|CR:radiation%2",
        "M2|M1|M2",
    ],
        reactions: {
                "neutron": { elem1: "barium-141", elem2: "krypton-92" },
};
