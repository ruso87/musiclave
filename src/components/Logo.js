export default function Logo(props) {
    return (
        <picture>
            <source media="(min-width:650px)" srcSet={ props.logoDsk } />
            <img alt="Musicalve - Tu musica está por nacer" src={ props.logoMbl } className="logo"/>
        </picture>
    )
}