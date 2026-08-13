# Truncated-hyperbolic sampling adjustment

## Summary

Truncated-hyperbolic sampling adjustment treats finite or thresholded bibliometric samples as shifted versions of an underlying cumulative-advantage distribution.

## Canonical Form

- Unit of analysis: sampled citation distribution, truncation point, hyperbolic tail, shift parameter, or cumulative count.
- Typical representation: adjustment that shifts a distribution parameter to account for sampling from a truncated hyperbolic form.
- Method target: connect observed partial samples to a broader cumulative-advantage process.
- Empirical signature: a sampled distribution resembles the theoretical distribution after a small shift or offset in its count parameter.

## Uses in Science of Science

- Extends [cumulative advantage distribution](cumulative_advantage_distribution.md) to incomplete or thresholded samples.
- Helps interpret [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md) when archive coverage changes the visible count distribution.
- Connects to [citation window selection](citation_window_selection.md), because time-window truncation changes observed success counts.

## Operationalization

- Identify whether the sample is truncated by time, source coverage, threshold, or selection.
- Fit the observed distribution and compare it with the untruncated cumulative-advantage form.
- Introduce a shift or offset parameter when the sample behaves like a truncated hyperbolic distribution.
- Report the sampling boundary and the inferred adjustment.

## Evidence and Validations

- Verified full-text evidence from Price (1976) cites Brookes's truncated hyperbolic sampling result.
- Price conjectures that this sampling effect behaves like shifting the cumulative-advantage parameter from m to m plus h.
- The motif isolates the sampling-adjustment idea from the broader cumulative-advantage distribution.

## Caveats

- Price frames the connection as a conjectural adjustment rather than a fully validated estimator.
- Different truncation mechanisms can imply different shifts.
- Modern citation databases require explicit coverage and citation-window diagnostics before applying the idea.

## Links

- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)
- [citation window selection](citation_window_selection.md)
- [growth-normalized citation-age baseline](growth_normalized_citation_age_baseline.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `truncated_hyperbolic_sampling_adjustment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: truncated hyperbolic adjustment; Brookes sampling adjustment; m-plus-h CAD shift; truncated citation-tail correction
