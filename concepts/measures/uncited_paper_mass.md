# Uncited-paper mass

## Summary

Uncited-paper mass is the share or count of papers in a corpus that receive zero citations within a defined database, field, and citation window.

## Canonical Form

- Unit of analysis: paper cohort, field, journal set, database snapshot, publication year, or citation window.
- Typical representation: zero-citation share, uncited count, minimally cited share, or low-attention mass.
- Measurement target: quantify the lower tail of scientific attention rather than only mean or highly cited impact.
- Empirical signature: a substantial fraction of indexed papers receive no citations or only a few citations in the chosen window.

## Uses in Science of Science

- Complements [citation distribution scaling](citation_distribution_scaling.md) by making the zero-citation mass explicit.
- Is directly measurable in cohorts such as [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md), provided uncited records are retained.
- Connects to [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md), where minimally cited papers leave active citation flows quickly.
- Grounds [attention inequality](../mechanisms/attention_inequality.md) and [citation impact indicators](citation_impact_indicators.md) in lower-tail as well as upper-tail behavior.
- Connects to [hidden citations](hidden_citations.md) and [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md), because absence of formal citations is not always absence of knowledge use.
- Helps evaluate database coverage, field practices, and citation-window selection.

## Operationalization

- Define corpus, publication year, database, document types, fields, and citation-count date.
- Count papers with zero received citations in the chosen citation window.
- Report zero-citation share alongside low-citation thresholds such as <=1, <=5, or <=10 citations.
- Use [citation threshold profile](citation_threshold_profile.md) when zero-citation mass needs to be interpreted with the rest of the lower tail and extreme upper tail.
- Compare by field, document type, language, venue, access route, and database source.
- Distinguish never-cited from not-yet-cited in recent cohorts.

## Evidence and Validations

- Verified full-text evidence from Price (1965) models a yearly citation incidence in which many existing papers are not cited during the year, despite the total reference-citation balance.
- Price's almost-closed-field example explicitly assigns a subset of older papers to the uncited category for that year.
- Price also motivates [live/dead citation survival](../mechanisms/live_dead_citation_survival.md), which separates papers temporarily uncited in a year from papers that may have left active citation circulation.
- Verified full-text evidence from Redner (1998) reports that 368,110 of 783,339 papers in an ISI cohort were uncited.
- Redner summarizes the lower tail as about 47 percent uncited and more than 80 percent cited 10 times or less, making uncited mass central to the full citation distribution.
- Redner also argues that minimally cited papers often have short citation lifetimes, motivating a mechanism-level split from the zero-count measure.

## Caveats

- Uncited does not mean unused, false, or low quality.
- Citation windows, database coverage, field norms, document type, and language strongly affect the zero-citation share.
- Recent papers need enough exposure time before zero-citation shares are interpreted.

## Links

- [citation distribution scaling](citation_distribution_scaling.md)
- [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md)
- [citation threshold profile](citation_threshold_profile.md)
- [reference-citation balance](../representations/reference_citation_balance.md)
- [annual citation-incidence distribution](annual_citation_incidence_distribution.md)
- [live/dead citation survival](../mechanisms/live_dead_citation_survival.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [citation impact indicators](citation_impact_indicators.md)
- [hidden citations](hidden_citations.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [citation data census dates](../methods/citation_data_census_dates.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]
- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `uncited_paper_mass`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: uncitedness; zero-citation share; uncited papers; lower-tail citation mass
