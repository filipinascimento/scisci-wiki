# Pre-mobile right censoring

## Summary

Pre-mobile right censoring is the validation problem that researchers classified as non-mobile in a short observation window may simply have not moved yet.

## Canonical Form

- Unit of analysis: author, mobility window, observed affiliation history, or non-mobile classification.
- Typical representation: observation horizon, right-censoring flag, future-move sensitivity, or career-stage stratification.
- Validation target: whether non-mobile denominators include future movers whose mobility occurs after the data window.
- Empirical signature: mobility rates increase when the same author cohort is followed for longer, especially among junior researchers.

## Uses in Science of Science

- Qualifies [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md) and [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md).
- Clarifies why short-panel [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md) should report observation horizons.
- Provides a denominator caveat for [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md) and [regional mobility net balance](../measures/regional_mobility_net_balance.md).
- Links mobility measurement to career-stage designs in [scientific career impact](../mechanisms/scientific_career_impact.md).

## Operationalization

- Define non-mobile authors as non-mobile within a stated publication-affiliation window, not as permanently non-mobile.
- Stratify mobility rates by career age, first-publication cohort, field, and publication intensity.
- Recompute mobility classifications under longer windows or staggered cohort designs when data allow.
- Report the share of authors near the end of the window whose future affiliations are unobserved.
- Distinguish right censoring from left-censoring caused by missing earlier publications.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) tracks researchers over 2008-2015.
- The paper states that authors counted as non-mobile might instead be pre-mobile, meaning they had not yet moved within the observed period.
- Sugimoto et al. also note that the short time window emphasizes junior scholars, whose later mobility trajectories may differ from senior scholars.
- This limitation directly affects the denominator used to compare mobile and non-mobile citation impact.

## Caveats

- Longer windows reduce censoring but introduce other changes in database coverage, field mix, and career survivorship.
- Non-publication periods can hide mobility even when a researcher changes country.
- Treating all non-mobile authors as right-censored would overcorrect; some researchers remain institutionally local by choice or field structure.
- The same design can also suffer from [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md) if moves appear only in non-indexed outputs.

## Links

- [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md)
- [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md)
- [regional mobility net balance](../measures/regional_mobility_net_balance.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `pre_mobile_right_censoring`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: pre-mobile bias; mobility right censoring; non-mobile future mover caveat; short-window mobility censoring
