# Pre-peak beauty-score boundary

## Summary

The beauty coefficient scores citation history only up to the annual citation maximum, so post-peak durability, decay, or plateau behavior needs a separate validation layer.

## Canonical Form

- Unit of analysis: paper citation trajectory before and after peak annual citations.
- Typical representation: beauty coefficient paired with post-peak decay, plateau, or half-life measures.
- Validation target: boundary between delayed-recognition scoring and later impact persistence.
- Empirical signature: papers with similar B values show different post-awakening durability.

## Uses in Science of Science

- Clarifies what [beauty coefficient](../measures/beauty_coefficient.md) does and does not measure.
- Complements [post-peak citation decay check](post_peak_citation_decay_check.md) and long-term citation prediction.
- Useful when delayed recognition is used to infer durable value rather than temporary rediscovery.

## Operationalization

- Record B, peak year, peak annual citations, post-peak slope, citation half-life, and cumulative post-peak citations.
- Compare delayed-recognition cases with similar pre-peak histories but different post-peak behavior.
- Avoid ranking cases by B alone when the research question concerns post-awakening durability.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) defines B through the citation history up to the year of maximum annual citations and notes that the measure does not account for how the curve decreases afterward.
- This motivates a boundary check whenever B is used as an impact or rediscovery indicator.

## Caveats

- Recent papers may not have enough post-peak time to estimate durability.
- Post-peak decline can reflect field saturation, method incorporation, or database-window truncation.

## Links

- [Beauty coefficient](../measures/beauty_coefficient.md)
- [Post-peak citation decay check](post_peak_citation_decay_check.md)
- [Peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [Citation longevity parameter](../measures/citation_longevity_parameter.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `pre_peak_beauty_score_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: beauty coefficient post-peak boundary; pre-peak B-score caveat; post-awakening durability check
