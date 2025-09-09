import GitHubCalendar from 'react-github-calendar';

export default function GitHubCalendarComponent() {
    return (
        <div className='flex justify-center py-10'>
            <GitHubCalendar username="rajtilak01" blockSize={15} blockMargin={5} fontSize={16}/>
        </div>
    );
}