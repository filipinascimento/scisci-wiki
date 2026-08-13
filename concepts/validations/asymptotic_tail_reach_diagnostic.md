# Asymptotic tail-reach diagnostic

## Summary

Asymptotic tail-reach diagnostic evaluates whether a citation dataset reaches far enough into the high-citation tail to support asymptotic tail claims.

## Canonical Form

- Unit of analysis: citation rank plot, publication cohort, scaled rank, mean citation level, or tail-fit range.
- Typical representation: scaled Zipf plot, corpus-size comparison, tail linearity range, and fit-range justification.
- Validation target: whether observed data are deep enough for tail exponent inference.
- Empirical signature: larger or better-scaled datasets extend farther into a stable-looking tail than smaller comparison panels.

## Uses in Science of Science

- Provides a data-adequacy validation for [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md).
- Supports [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md) and [citation tail sparsity limit](citation_tail_sparsity_limit.md).
- Links tail-inference decisions back to [citation distribution scaling](../measures/citation_distribution_scaling.md).
- Complements [long-horizon citation-tail benchmark](long_horizon_citation_tail_benchmark.md), which addresses temporal maturity.

## Operationalization

- Plot citation rank curves in raw and scaled units.
- Compare datasets by corpus size, mean citation rate, and relative-rank depth.
- Identify the range over which the scaled tail is approximately linear.
- Report the tail-fit range and why the dataset is judged adequate or inadequate.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) rescales citation rank by total papers and citation count by average citations.
- Redner reports a good collapse across ISI and Physical Review D data and uses it to locate the asymptotic regime.
- The paper argues that the larger ISI set extends deeper than the Physical Review D data into the asymptotic tail and identifies a rank range used for tail-exponent inference.

## Caveats

- Apparent linearity in a scaled Zipf plot can be sensitive to plotting choices and fit range.
- Tail reach depends on corpus size, citation age, field composition, and database coverage.
- A tail-reach diagnostic does not prove a power law; it only checks whether asymptotic claims are plausible from the data.

## Links

- [scaled Zipf data collapse](../methods/scaled_zipf_data_collapse.md)
- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [citation tail sparsity limit](citation_tail_sparsity_limit.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [long-horizon citation-tail benchmark](long_horizon_citation_tail_benchmark.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `asymptotic_tail_reach_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation tail reach; asymptotic citation tail adequacy; scaled-rank tail diagnostic; high-citation tail reach check
