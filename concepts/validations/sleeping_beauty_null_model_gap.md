# Sleeping-beauty null-model gap

## Summary

The sleeping-beauty null-model gap is the validation pattern in which simple citation-network nulls fail to reproduce the empirical distribution of delayed-recognition scores.

## Canonical Form

- Unit of analysis: citation network, paper citation history, beauty coefficient distribution, or simulated citation trajectory.
- Typical representation: empirical-versus-null survival curves, maximum B values under nulls, or trajectory comparisons for top sleeping beauties.
- Validation target: test whether delayed recognition can be explained by generic citation-volume reshuffling or preferential attachment alone.
- Empirical signature: null models produce narrower B distributions, lower cutoffs, or wrong trajectory shapes.

## Uses in Science of Science

- Validates [beauty coefficient](../measures/beauty_coefficient.md) as capturing more than trivial citation-network growth.
- Connects [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) to [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md) and [preferential attachment](../mechanisms/preferential_attachment.md).
- Supports the [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md) as an empirical pattern requiring richer mechanisms.

## Operationalization

- Compute beauty coefficients on the empirical citation network.
- Construct null citation histories by reshuffling citations while preserving time order or by reassigning references under preferential attachment.
- Compare empirical and null B survival distributions and the citation histories of top-ranked papers.
- Report whether nulls preserve citation volume, citation age, paper age, or degree distributions.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) compares APS and WoS beauty-coefficient distributions against a network-randomization process and a preferential-attachment baseline.
- The network-randomization baseline produces rapidly declining citation histories and a small maximum B value of 30.
- The preferential-attachment baseline produces a much smaller B range and a well-defined cutoff relative to the empirical distributions.
- Ke et al. conclude that simple cumulative-advantage models are not easily reconciled with observed beauty-coefficient distributions.
- The related [citation-model first-mover limit](citation_model_first_mover_limit.md) names the model-side mechanism: standard citation dynamics make late awakening difficult when early attention is absent.

## Caveats

- Failure of simple nulls does not identify the exact awakening mechanism.
- Null conclusions depend on what temporal, degree, and citation-volume constraints are preserved.
- More realistic citation-history models with aging, fitness, field growth, and topic shifts may explain more of the pattern.

## Links

- [beauty coefficient](../measures/beauty_coefficient.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation-model first-mover limit](citation_model_first_mover_limit.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_null_model_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: SB null-model mismatch; beauty-coefficient null gap; delayed-recognition null validation; PA sleeping-beauty gap
