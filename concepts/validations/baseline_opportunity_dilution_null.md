# Baseline opportunity-dilution null

## Summary

Time-order-preserving citation reshuffles dilute attention to old papers because the pool of possible cited targets keeps growing.

## Canonical Form

- Unit of analysis: citation edge, citing year, admissible cited paper, randomized network, beauty coefficient, or null trajectory.
- Typical representation: temporal citation-reshuffle null with expanding target pool.
- Mechanism, measurement, or validation target: baseline explanation for why delayed recognition is difficult under random citation allocation.
- Empirical signature: randomized citation histories decline rapidly and produce low maximum B when later papers face many possible targets..

## Uses in Science of Science

- Refines sleeping-beauty null validation by linking it to [time order preserving citation reshuffle null](../methods/time_order_preserving_citation_reshuffle_null.md) and [sleeping beauty null model gap](sleeping_beauty_null_model_gap.md).
- Useful as a reusable check when [beauty coefficient tail scaling](../measures/beauty_coefficient_tail_scaling.md) is interpreted from citation histories.
- Adds cross-links to [citation volume growth normalization](../methods/citation_volume_growth_normalization.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Randomly reshuffle citations under temporal admissibility.
- Compare empirical B distributions and top-SB histories with randomized trajectories.
- Interpret the randomized decline as opportunity dilution from the growing pool of citable papers.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) reports that a network-randomization baseline produces rapid declines and a low B maximum because later citing papers face more possible targets.
- The motif clarifies the mechanism inside the time-order-preserving null.

## Caveats

- The null erases topical relevance, field structure, author behavior, and paper fitness.
- It is a baseline rather than a behavioral model of citation choice.

## Links

- [Time-order-preserving citation reshuffle null](../methods/time_order_preserving_citation_reshuffle_null.md)
- [Sleeping-beauty null-model gap](sleeping_beauty_null_model_gap.md)
- [Beauty-coefficient tail scaling](../measures/beauty_coefficient_tail_scaling.md)
- [Citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [Pairwise citation-probability decay](../measures/pairwise_citation_probability_decay.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying Sleeping Beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; SciSciNet: W2171817276; WoS: unknown]

## Metadata

- Concept ID: `baseline_opportunity_dilution_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: citation-opportunity dilution; temporal reshuffle dilution; growing-target null
