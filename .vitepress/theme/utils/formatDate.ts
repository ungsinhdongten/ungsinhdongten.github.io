export default function ( date: string ) {
    return new Date( date ).toLocaleString( 'vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    } );
}
