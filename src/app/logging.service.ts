export class LoggingService {
    LogToConsole( message: string ) {
        console.log('A server status changed, new status: ' + message);
    }
}