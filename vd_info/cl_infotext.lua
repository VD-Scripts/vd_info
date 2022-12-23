function Show(key,text,color)
    SendNUIMessage({
        action = "show",
        key = key,
        text = text,
        color = color
    })
end

function Hide()
    SendNUIMessage({
        action = "hide"
    })
end