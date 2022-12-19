const userService = require("./user/index");

exports.handleUnFollow = async (event) => {
    const userId = event.source.userId;
    // console.log("user_id unfollow/block", userId);
    const isExist = await userService.isUserExist(userId);
    if (isExist) {
        // await userService.removeUserById(userId);
        await userService.updateIsActiveUser(userId, 0); // is_active = 0 (block/unfollow)
    }

}