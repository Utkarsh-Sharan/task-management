import {body} from "express-validator";

const titleValidator = () => {
    return [
        body("title")
            .trim()
            .notEmpty()
            .withMessage("Title should not be empty!")
            .isLength({min: 5, max: 50})
            .withMessage("Title must be 3-50 characters long!")
    ];
}

export {
    titleValidator,
}