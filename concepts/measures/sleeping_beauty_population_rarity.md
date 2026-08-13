# Sleeping-beauty population rarity

## Summary

Sleeping-beauty population rarity measures how uncommon delayed-recognition cases are relative to the full annual publication population.

## Canonical Form

- Unit of analysis: publication-year cohort, sleeping-beauty threshold cell, annual publication denominator, or rare-candidate count.
- Typical representation: number of sleeping beauties per publication year, per million papers, or per threshold class.
- Measurement target: distinguish exceptional delayed-recognition trajectories from the much larger population of low-cited or ordinary papers.
- Empirical signature: extreme sleeping beauties are very sparse even in million-paper annual cohorts.

## Uses in Science of Science

- Adds a denominator layer to [awakening probability function](awakening_probability_function.md) and [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md).
- Helps evaluation users avoid overgeneralizing from vivid [sleeping beauty](../mechanisms/sleeping_beauty.md) anecdotes.
- Connects delayed-recognition measurement to [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md) and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Operationalization

- Define the sleep-depth, sleep-length, and awakening-intensity thresholds used to classify candidate sleeping beauties.
- Count candidate papers by publication year or cohort.
- Divide candidate counts by the total number of indexed publications in the same cohort.
- Report separate rarity values for extreme and less prominent threshold cells.
- Keep annual publication growth explicit so a larger later denominator is not mistaken for higher delayed-recognition propensity.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) reports 41 deep-sleep papers from about 1,000,000 papers published in 1988 that later received 21-30 citations during the four-year awakening period.
- The same analysis identifies just one most-extreme case with ten years of zero citations followed by more than 60 citations in the awakening window.
- van Raan states that lowering sleep time, sleep depth, or awakening intensity can yield 100 to 1,000 less prominent sleeping beauties per year, still few relative to an annual population of about 1,000,000 papers.
- This evidence frames sleeping beauties as a tail phenomenon whose prevalence depends strongly on threshold severity.

## Caveats

- Rarity estimates depend on database coverage, self-citation handling, document types, field mix, and publication year.
- Less prominent sleeping beauties can be numerous enough for aggregate study but still rare relative to all publications.
- Extreme-case rarity should not be treated as a stable universal constant across databases or fields.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [awakening probability function](awakening_probability_function.md)
- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [sleep depth and length](sleep_depth_length.md)
- [awakening intensity](awakening_intensity.md)
- [sleeping-beauty/classic boundary](../validations/sleeping_beauty_classic_boundary.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_population_rarity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: delayed-recognition rarity; sleeping-beauty denominator; annual sleeping-beauty prevalence; extreme sleeping-beauty rarity
