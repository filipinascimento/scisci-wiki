# Long-Lived Physicist Cohort Restriction

## Summary

Long-lived physicist cohort restriction is the validation caveat that mobility results based on scientists with long uninterrupted publication careers may overrepresent durable, historically bounded careers.

## Canonical Form

- Unit of analysis: author, career trajectory, publication history, discipline cohort, or mobility panel.
- Typical representation: cohort-selection rule and generalizability caveat.
- Validation target: prevent mobility estimates from being generalized beyond the longevity-filtered author set.
- Empirical signature: included scientists have long observed careers and limited publication gaps, excluding shorter, interrupted, or later careers.

## Uses in Science of Science

- Qualifies the [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md).
- Adds cohort-selection context to [career move timing distribution](../measures/career_move_timing_distribution.md) and [career move count distribution](../measures/career_move_count_distribution.md).
- Complements [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md).
- Helps interpret [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md) as evidence from a long-career physics cohort.

## Operationalization

- Record the start-year, career-length, and publication-gap rules used to define the author cohort.
- Compare included and excluded authors where possible.
- Treat career-timing and mobility-frequency estimates as conditional on the cohort restriction.
- Test whether shorter or more recent cohorts show the same mobility patterns when data permit.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) restricts the mobility analysis to authors who began careers between 1950 and 1980 and published for at least 20 years without interruptions exceeding five years.
- The resulting corpus contains 2,725 scientists and 5,915 career movements.
- The paper later states that the dataset restriction biases the results toward physicists from the 1960s to 1980s with high career longevity.

## Caveats

- The restriction improves comparability of observed career histories but narrows the estimand.
- Mobility patterns for short-career, intermittent, or contemporary scientists may differ.
- The caveat interacts with database coverage and field-specific publishing norms.

## Links

- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [career move count distribution](../measures/career_move_count_distribution.md)
- [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `long_lived_physicist_cohort_restriction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: long-career physicist cohort; mobility longevity filter; uninterrupted-career mobility cohort; high-longevity author selection
