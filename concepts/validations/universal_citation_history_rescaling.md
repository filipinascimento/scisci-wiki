# Universal citation-history rescaling

## Summary

Universal citation-history rescaling tests whether diverse paper citation histories collapse onto a common curve after rescaling by paper-specific fitness, immediacy, and longevity parameters.

## Canonical Form

- Unit of analysis: paper citation trajectory, journal cohort, field cohort, or model validation set.
- Typical representation: rescaled time, rescaled cumulative citations, data-collapse plot, or fitted universal curve.
- Validation target: determine whether a small parameter set captures heterogeneous citation histories across papers and journals.
- Empirical signature: rescaled citation histories from different papers fall near the same curve despite different raw citation paths.

## Uses in Science of Science

- Validates [citation trajectory models](../methods/citation_trajectory_models.md) beyond visual curve fitting.
- Checks whether [paper fitness](../measures/paper_fitness.md), [citation immediacy parameter](../measures/citation_immediacy_parameter.md), and [citation longevity parameter](../measures/citation_longevity_parameter.md) jointly explain citation-history heterogeneity.
- Supports [long-term citation prediction](../methods/long_term_citation_prediction.md) by showing that fitted parameters can generalize across cohorts.
- Sits upstream of [equal-fitness citation convergence](equal_fitness_citation_convergence.md), which tests a concrete long-term outcome implication of fitted fitness.
- Provides a model-validation motif for comparing alternative citation-history curves.

## Operationalization

- Fit citation histories to estimate relative fitness, immediacy, and longevity for each paper.
- Transform raw time and cumulative citation counts into the model's rescaled variables.
- Plot and statistically test whether trajectories collapse onto the predicted universal curve.
- Repeat across journal cohorts, field cohorts, publication years, and citation-window choices.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) predicts that each paper's citation history should follow the same universal curve after rescaling with paper-specific relative fitness, immediacy, and longevity.
- The paper tests the prediction on Physical Review papers from 1950 to 1980 and reports that rescaled citation histories collapse onto the predicted curve.
- Wang et al. also test papers published in 1990 by 12 prominent journals and report excellent collapse across those journal cohorts.
- The paper explains that varying the three parameters can account for a wide range of observed citation histories, from jump-decay patterns to delayed impact.
- Wang et al. then use those parameters for matched-fitness convergence and long-term prediction validations.

## Caveats

- Data collapse can hide systematic subgroup failures if only aggregate plots are inspected.
- Fit quality depends on citation coverage, cohort selection, and treatment of low-citation papers.
- Exogenous second acts and sleeping-beauty trajectories can violate the shared-curve assumption.

## Links

- [citation trajectory models](../methods/citation_trajectory_models.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [equal-fitness citation convergence](equal_fitness_citation_convergence.md)
- [citation prediction envelope coverage](citation_prediction_envelope_coverage.md)
- [alternative citation curve benchmark](alternative_citation_curve_benchmark.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `universal_citation_history_rescaling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation history collapse; data collapse validation; rescaled citation histories; universal citation curve
