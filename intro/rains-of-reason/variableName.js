function variableName(name) {
    return !/[0-9]/.test(name[0]) && /^[0-9a-zA-Z_]+$/.test(name)
}
