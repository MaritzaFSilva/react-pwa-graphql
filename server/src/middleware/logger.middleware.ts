import { ExpressContextFunctionArgument } from "@apollo/server/dist/esm/express4";
import dayjs from "dayjs";

export const loggerMiddleware = () => ({
    context: async ({ req }: ExpressContextFunctionArgument) => {
        console.log(
            `[${dayjs().format("DD/MM/YYYY HH:mm:ss")}] ${
                req.url
            }: ${JSON.stringify(req.body)} `
        );

        return req;
    },
});
