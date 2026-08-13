# Mobility entry-cohort window

## Summary

Mobility entry-cohort window fixes a researcher-mobility analysis to authors who first appear in a given publication year and meet a minimum productivity threshold, so observed mobility paths are comparable within a bounded career window.

## Canonical Form

- Unit of analysis: author, first-publication cohort, publication window, or mobility-eligible researcher.
- Typical representation: entry year, observation horizon, minimum publication count, mobile-subset size, and inclusion/exclusion table.
- Mechanism or measurement target: separating early-career mobility trajectories from mixed-career histories when affiliation data cover only a short period.
- Empirical signature: the mobility cohort is narrower than the full author population and is explicitly tied to a first indexed publication year.

## Uses in Science of Science

- Provides a cohort-construction rule for [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md) and [country of scientific origin proxy](country_scientific_origin_proxy.md).
- Supplies the denominator for [regional mobility net balance](../measures/regional_mobility_net_balance.md), [brain circulation networks](../representations/brain_circulation_networks.md), and [pre/post-move citation role decomposition](pre_post_move_citation_role_decomposition.md).
- Makes [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md) estimates more interpretable by specifying who was observable long enough to move.
- Helps distinguish non-mobile from [pre-mobile](../validations/pre_mobile_right_censoring.md) researchers when the observation period is short.
- Exposes source and output-format restrictions captured by [journal-article mobility coverage bias](../validations/journal_article_mobility_coverage_bias.md).

## Operationalization

- Choose a first-indexed publication year and assign each researcher to the cohort only if that year is their first observed publication in the database.
- Track country affiliations through a fixed publication window.
- Apply a minimum publication-count threshold when the analysis requires enough observations to infer movement and citation timing.
- Report whether the cohort includes all mobile scholars or only migrants and directional travelers.
- Publish the full inclusion rules so citation and mobility estimates can be compared against broader author panels.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) analyzes records for nearly 14 million papers and almost 16 million unique individuals who published between 2008 and 2015.
- The paper then narrows one mobility-flow analysis to migrants and directional travelers who first published in 2008 and had at least eight papers during the study period.
- Sugimoto et al. report that this restricted group comprised 12,046 researchers.
- The paper explicitly states that the short time window focuses the analysis on junior scholars and avoids conflating them with senior scholars whose movement and networking are likely to differ.

## Caveats

- Entry-cohort windows are sensitive to database backfiles: a researcher can appear to start in the cohort because earlier publications are missing.
- Minimum publication thresholds privilege more productive researchers and fields with higher article rates.
- A short observation window can label researchers as non-mobile even when they move later through [pre-mobile right censoring](../validations/pre_mobile_right_censoring.md).
- Cohort restrictions improve comparability but can reduce generalizability to senior researchers or low-publication fields.

## Links

- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [country of scientific origin proxy](country_scientific_origin_proxy.md)
- [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md)
- [regional mobility net balance](../measures/regional_mobility_net_balance.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [pre/post-move citation role decomposition](pre_post_move_citation_role_decomposition.md)
- [mobile scholar citation premium](../measures/mobile_scholar_citation_premium.md)
- [pre-mobile right censoring](../validations/pre_mobile_right_censoring.md)
- [journal-article mobility coverage bias](../validations/journal_article_mobility_coverage_bias.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `mobility_entry_cohort_window`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: first-publication cohort window; mobility cohort filter; 2008 entry cohort; minimum publication cohort
