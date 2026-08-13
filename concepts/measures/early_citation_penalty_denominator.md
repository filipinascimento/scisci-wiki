# Early-citation penalty denominator

## Summary

Ke's beauty-coefficient denominator penalizes early citations, so later accumulation receives higher delayed-recognition scores than early uptake at similar total citation volume.

## Canonical Form

- Unit of analysis: annual citation count in a paper citation trajectory.
- Typical representation: normalized gap between a reference line and observed citations using a denominator such as max(1, observed citations).
- Measurement target: depth of early sleep adjusted for nonzero early citation activity.
- Empirical signature: early citations reduce delayed-recognition score even if later citations are large.

## Uses in Science of Science

- Makes a component of [beauty coefficient](beauty_coefficient.md) interpretable for audits and implementations.
- Useful when comparing papers with similar peaks but different early citation leakage.
- Links geometric trajectory scoring to [sleep depth and length](sleep_depth_length.md) and [awakening intensity](awakening_intensity.md).

## Operationalization

- Expose the denominator term used in each annual gap contribution and report years where early citations materially lower B.
- Compare B with and without the early-citation penalty in sensitivity checks.
- Document zero-citation handling, especially the use of max(1, citations) or equivalent safeguards.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) defines the beauty coefficient with a normalized gap whose denominator uses the observed citation count with a lower bound of one.
- The paper states that this construction penalizes early citations, matching the intuition of a sleeping period.

## Caveats

- Penalizing early citations is appropriate for delayed-recognition shape, not for general impact assessment.
- Small denominator choices can have large effects for sparse early citation histories.

## Links

- [Beauty coefficient](beauty_coefficient.md)
- [Citation-history reference line](../representations/citation_history_reference_line.md)
- [Sleep depth and length](sleep_depth_length.md)
- [Awakening intensity](awakening_intensity.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `early_citation_penalty_denominator`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: beauty coefficient early citation penalty; B denominator penalty; early uptake delayed-recognition penalty
