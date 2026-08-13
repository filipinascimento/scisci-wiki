# Country of scientific origin proxy

## Summary

Country of scientific origin proxy assigns a scientist's origin country from an observable bibliometric trace, commonly the country listed on their first indexed publication.

## Canonical Form

- Unit of analysis: author, first publication, affiliation country, mobility trajectory, or country cohort.
- Typical representation: origin-country label, first-affiliation country, origin-destination table, or mobility baseline.
- Mechanism or measurement target: starting point for measuring international mobility, brain circulation, and country-level talent flows.
- Empirical signature: researchers are classified relative to an observed origin country before subsequent affiliations or moves are evaluated.

## Uses in Science of Science

- Provides an operational starting point for [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md).
- Supports [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md), [brain circulation networks](../representations/brain_circulation_networks.md), and [country mobility role typology](../measures/country_mobility_role_typology.md).
- Makes explicit when "origin" means first publication country rather than birth, citizenship, training, or first job.
- Pairs with [country-at-18 origin proxy](country_at_18_origin_proxy.md) when comparing survey-origin labels against bibliometric origin labels.
- Supplies a caveat layer for [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md).
- Splits proxy-validity concerns into [academic origin ambiguity caveat](../validations/academic_origin_ambiguity_caveat.md) and source-coverage concerns into [journal-article mobility coverage bias](../validations/journal_article_mobility_coverage_bias.md).

## Operationalization

- Build disambiguated author publication histories with normalized country affiliations.
- Identify each author's first indexed publication in the corpus and assign the country or countries appearing in its affiliation list as scientific origin.
- Track later country affiliations and classify mobility relative to that origin.
- Report treatment of multi-country first publications, missing affiliations, ties, publication-year ordering, and database coverage.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) assigns each researcher a country of scientific origin from the country stated in the affiliation of the researcher's first paper.
- The paper explicitly warns that this proxy should not be confused with country of birth.
- Sugimoto et al. use this origin label to track whether researchers moved or gained affiliations in other countries over an eight-year window.
- Their limitations section notes that first-publication country may not represent birth, academic training, or employment, and that Web of Science coverage can underestimate mobility from countries whose researchers publish first outside indexed journals.
- Verified full-text evidence from Franzoni et al. (2012) provides a survey alternative: [country-at-18 origin proxy](country_at_18_origin_proxy.md), based on respondents' country of residence at age 18.

## Caveats

- First publication country is a bibliometric proxy, not a direct demographic or biographical fact.
- Authors with multiple first-year affiliations can have non-directional mobility histories.
- Short windows can classify researchers as non-mobile when they are only [pre-mobile](../validations/pre_mobile_right_censoring.md).
- Coverage differences across countries, languages, document types, and fields can bias origin labels through [journal-article mobility coverage bias](../validations/journal_article_mobility_coverage_bias.md).

## Links

- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [country-at-18 origin proxy](country_at_18_origin_proxy.md)
- [GlobSci survey](../datasets/globsci_survey.md)
- [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [country mobility role typology](../measures/country_mobility_role_typology.md)
- [author name disambiguation](author_name_disambiguation.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [academic origin ambiguity caveat](../validations/academic_origin_ambiguity_caveat.md)
- [pre-mobile right censoring](../validations/pre_mobile_right_censoring.md)
- [journal-article mobility coverage bias](../validations/journal_article_mobility_coverage_bias.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]
- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `country_scientific_origin_proxy`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: first-publication country; scientific origin country; affiliation-origin proxy; country of academic origin
