# Large-scale classification compute profile

## Summary

Large publication classifications should report the hardware, runtime, implementation, and graph size that make the method feasible at bibliometric scale.

## Canonical Form

- Unit of analysis: classification run, publication graph, edge count, memory budget, runtime, or implementation stack.
- Typical representation: resource-profile record attached to a field-classification artifact.
- Mechanism, measurement, or validation target: algorithmic scalability and reproducibility of publication clustering.
- Empirical signature: the reported method can be rerun or scaled because graph size, runtime, memory, and parallelism are explicit.

## Uses in Science of Science

- Connects large-scale classification reproducibility to [algorithmic scalability feasibility claim](algorithmic_scalability_feasibility_claim.md) and [direct citation relatedness graph](../representations/direct_citation_relatedness_graph.md).
- Provides a reusable motif for comparing [multilevel coarsening refinement clustering](../methods/multilevel_coarsening_refinement_clustering.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [stochastic clustering run selection](stochastic_clustering_run_selection.md) in linked scholarly data.

## Operationalization

- Record publication count, edge count, memory, runtime, CPU count, software language, and major preprocessing steps.
- Report whether runs are stochastic and how many independent starts were used.
- Keep resource profiles with released classification artifacts.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) reports a 10.2 million publication, 97.6 million relation application with C optimization, MATLAB calculations, 64 GB memory, parallel runs, and multi-day runtime.
- This makes compute feasibility part of the method evidence.

## Caveats

- Historical compute profiles may be outdated but still document algorithmic scale.
- Hardware feasibility does not substitute for classification validity.

## Links

- [Algorithmic scalability feasibility claim](algorithmic_scalability_feasibility_claim.md)
- [Direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [Multilevel coarsening-refinement clustering](../methods/multilevel_coarsening_refinement_clustering.md)
- [Stochastic clustering run selection](stochastic_clustering_run_selection.md)
- [Hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `large_scale_classification_compute_profile`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: classification runtime profile; bibliometric clustering resource budget; publication-map compute feasibility; large-scale field-classification hardware trace
