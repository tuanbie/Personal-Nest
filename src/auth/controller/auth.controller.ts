import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Post,
    UseInterceptors
} from "@nestjs/common";
import { AuthServie } from "../auth.service";
import { CreateUserDto, UserOutputDto } from "src/modules/user/dtos";
import { Public } from '../../common';
import { BaseApiResponse } from '../../shared/dtos';
import { UserService } from "src/modules/user/providers";

@Controller('')
export class AuthController {
    constructor(
        private readonly authService: AuthServie,
        private readonly userService: UserService
    ) { }

    @Post('register')
    @Public()
    @UseInterceptors(ClassSerializerInterceptor)
    public async register(
        @Body() body: CreateUserDto,
    ): Promise<BaseApiResponse<CreateUserDto>> {
        return this.authService.register(body);
    }
}