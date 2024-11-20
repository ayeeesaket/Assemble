import { ZodError } from "zod";
import ApiError from "../utils/ApiError.js";

const validationSchema = (schema, source="body") => {
    function validate(req, _, next) {
        try {
            schema.parse(req[source]);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const zError = error.format();
                return new ApiError(400, zError);
            }
        }
    }
    return validate;
}

export default validationSchema;