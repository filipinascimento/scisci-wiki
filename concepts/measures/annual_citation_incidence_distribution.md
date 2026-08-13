# Annual citation-incidence distribution

## Summary

Annual citation-incidence distribution measures how many existing papers receive zero, one, two, or many citations during a single citing year.

## Canonical Form

- Unit of analysis: cited paper, citing year, field, database snapshot, or citation index.
- Typical representation: frequency distribution of received citations per existing paper in one year.
- Measurement target: the yearly allocation of citation attention across the archival literature.
- Empirical signature: most prior papers receive zero or one citation in the year, while a small minority receives repeated citations.

## Uses in Science of Science

- Splits the yearly lower-tail and upper-tail accounting inside [citation networks](../representations/citation_networks.md).
- Provides the local distribution behind [reference-citation balance](../representations/reference_citation_balance.md) and [uncited-paper mass](uncited_paper_mass.md).
- Helps distinguish one-year citation incidence from lifetime [citation distribution scaling](citation_distribution_scaling.md).
- Gives [citation impact indicators](citation_impact_indicators.md) a denominator for interpreting annual attention.

## Operationalization

- Select a citing year, cited-paper universe, database, document types, and field boundary.
- Count how many citations each existing paper receives from papers published in that year.
- Tabulate zero, one, two, and higher citation counts, preserving the top tail separately.
- Compare annual incidence with lifetime citation counts and with reference-list length distributions.
- Report whether the cited-paper universe includes non-indexed references, books, patents, or outside-field items.

## Evidence and Validations

- Verified full-text evidence from Price (1965) uses Garfield's 1961 Science Citation Index data to compare the distribution of references made with the distribution of citations received.
- Price reports that, in a given year, many existing papers are not cited and many others are cited only once, leaving a much smaller group to receive multiple citations.
- The paper highlights that citation incidence falls more rapidly in the annual distribution than reference-list length does in the citing-paper distribution.
- Price also notes that heavily cited papers vary from year to year, making annual incidence a time-windowed observation rather than a permanent paper trait.
- That yearly instability is split out as [annual citation burstiness](../mechanisms/annual_citation_burstiness.md), while repeated citation concentration by cited-paper age is split out as [citation multiplicity-age gradient](citation_multiplicity_age_gradient.md).

## Caveats

- Annual incidence is sensitive to database coverage, field boundary, and whether the year is complete.
- A zero in one year does not imply that a paper is never cited.
- High annual incidence can reflect reviews, controversies, methods, or citation bursts, not only durable intellectual value.

## Links

- [citation networks](../representations/citation_networks.md)
- [reference-citation balance](../representations/reference_citation_balance.md)
- [uncited-paper mass](uncited_paper_mass.md)
- [research-front citation share](research_front_citation_share.md)
- [citation multiplicity-age gradient](citation_multiplicity_age_gradient.md)
- [live/dead citation survival](../mechanisms/live_dead_citation_survival.md)
- [annual citation burstiness](../mechanisms/annual_citation_burstiness.md)
- [citation impact indicators](citation_impact_indicators.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [citation data census dates](../methods/citation_data_census_dates.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `annual_citation_incidence_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: yearly citation incidence; single-year citation distribution; citation incidence; annual citation attention distribution
