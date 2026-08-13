# Time-order-preserving citation reshuffle null

## Summary

Time-order-preserving citation reshuffle nulls randomize citation assignments while preserving temporal feasibility, testing whether delayed-recognition trajectories exceed what generic time-ordered citation volume can generate.

## Canonical Form

- Unit of analysis: citation event, cited paper, citing year, citation history, beauty coefficient, or null citation network.
- Typical representation: reshuffled citation-history ensemble, empirical-versus-null B distribution, maximum-null B value, or time-preserving rewiring rule.
- Method target: separate sleeping-beauty structure from citation-volume and publication-time artifacts.
- Empirical signature: null histories preserve broad time ordering but fail to reproduce the empirical upper tail of delayed-recognition scores.

## Uses in Science of Science

- Provides a concrete null behind [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md).
- Extends [citation network rewiring nulls](citation_network_rewiring_nulls.md) to delayed-recognition trajectory testing.
- Complements [preferential attachment](../mechanisms/preferential_attachment.md) baselines when evaluating [beauty coefficient](../measures/beauty_coefficient.md) distributions.
- Helps validate [sleeping-beauty detection](sleeping_beauty_detection.md) before mechanism claims are made.

## Operationalization

- Preserve citation time order so papers cannot receive citations from the future.
- Randomly reshuffle citation links or yearly citation assignments according to the chosen null constraints.
- Recompute annual citation histories and beauty coefficients for the null ensemble.
- Compare empirical and null survival distributions, top-ranked trajectories, and maximum B values.
- Report exactly which temporal, degree, and citation-count constraints are preserved.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) uses a network-randomization process that preserves time order while reshuffling citations.
- The null produces citation histories unlike the top empirical sleeping beauties and a much smaller maximum beauty coefficient than the observed data.
- This supports the claim that extreme delayed recognition is not a trivial consequence of citation-volume reshuffling under temporal feasibility alone.

## Caveats

- Time-order preservation is only one constraint; field growth, aging, fitness, reference-list length, and topic shifts may need richer nulls.
- A null gap validates a pattern but does not identify why a specific paper awakened.
- Different rewiring rules can change the expected B distribution.

## Links

- [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md)
- [citation network rewiring nulls](citation_network_rewiring_nulls.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [citation-model first-mover limit](../validations/citation_model_first_mover_limit.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [citation trajectory models](citation_trajectory_models.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `time_order_preserving_citation_reshuffle_null`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: time-preserving citation randomization; NR sleeping-beauty null; temporal citation reshuffle; citation-history reshuffle null
