# Beauty-coefficient tail scaling

## Summary

Beauty-coefficient tail scaling measures the heavy upper tail of delayed-recognition scores, treating extreme sleeping beauties as tail events within the broader distribution of citation trajectories.

## Canonical Form

- Unit of analysis: paper, beauty coefficient, citation-history corpus, field, database, or high-B subset.
- Typical representation: survival distribution, tail exponent, upper-tail cutoff, top-percentile B set, or log-log distribution plot.
- Measurement target: how rare and how extreme high delayed-recognition trajectories are.
- Empirical signature: beauty-coefficient survival distributions span orders of magnitude and contain a small but non-negligible tail of very high-B papers.

## Uses in Science of Science

- Adds distributional detail to [beauty coefficient](beauty_coefficient.md) and the [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md).
- Helps compare empirical delayed recognition with [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md) baselines.
- Provides a candidate-list rule for [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) when researchers need a manageable high-B tail.
- Connects delayed-recognition work to broader citation-tail and rare-event reasoning without imposing a hard class boundary.

## Operationalization

- Compute beauty coefficients across a large, age-eligible citation corpus.
- Plot the survival distribution of B values, ideally by database, field, and publication cohort.
- Estimate upper-tail behavior only over a justified range and report the minimum B threshold used for the fit.
- Compare empirical tail extent with time-order reshuffle and preferential-attachment baselines.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) reports heterogeneous beauty-coefficient survival distributions for APS and Web of Science data.
- The paper states that the distributions span several orders of magnitude and that APS and WoS have similar distributional shapes apart from the larger WoS cutoff.
- Ke et al. fit the APS upper tail with a power-law range and compare empirical tails with network-randomization and preferential-attachment baselines that produce much smaller B ranges.

## Caveats

- Tail fits are sensitive to observation windows, field coverage, database size, and recent-paper censoring.
- Tail scaling does not identify the awakening mechanism for individual papers.
- A top-percentile threshold is a practical sampling device, not a natural boundary between ordinary and sleeping-beauty papers.

## Links

- [beauty coefficient](beauty_coefficient.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `beauty_coefficient_tail_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: B-score tail; delayed-recognition tail scaling; sleeping-beauty upper tail; beauty-coefficient survival distribution
