import instance from "api/axios";

const getAllUsers = async (page, queryCondition = {}, token) => {
    let url = `/admin/searchUser/${page}?`;
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    if (queryCondition.name) {
        url += `&name=${queryCondition.name}`;
    }
    if (queryCondition.username) {
        url += `&username=${queryCondition.username}`;
    }
    if (queryCondition.address) {
        url += `&address=${queryCondition.address}`;
    }
    if (queryCondition.phone_number) {
        url += `&phone_number=${queryCondition.phone_number}`;
    }
    if (queryCondition.role) {
        url += `&role=${queryCondition.role}`;
    }

    try {
        const response = await instance.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const getTotalPageUser = async (page, queryCondition = {}, token) => {
    let url = `/admin/getTotalPageUser/${page}?`;
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    if (queryCondition.name) {
        url += `&name=${queryCondition.name}`;
    }
    if (queryCondition.username) {
        url += `&username=${queryCondition.username}`;
    }
    if (queryCondition.address) {
        url += `&address=${queryCondition.address}`;
    }
    if (queryCondition.phone_number) {
        url += `&phone_number=${queryCondition.phone_number}`;
    }
    if (queryCondition.role) {
        url += `&role=${queryCondition.role}`;
    }

    try {
        const response = await instance.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export {
    getAllUsers,
    getTotalPageUser
}