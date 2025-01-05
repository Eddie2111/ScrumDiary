export class JwtTokenDto {
    user: UserPayload;
}
export class UserPayload {
    email: string; 
    sub: number; 
    iat: number;
}
