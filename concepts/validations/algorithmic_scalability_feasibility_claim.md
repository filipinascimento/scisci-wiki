# Algorithmic scalability feasibility claim

## Summary

Algorithmic scalability feasibility claim is a validation motif in which a bibliometric method reports data scale and compute burden to show that a recursive or network algorithm can run at production size.

## Canonical Form

- Unit of analysis: algorithm, dataset, production metric, or computational pipeline.
- Typical representation: node count, edge count, runtime, hardware note, or complexity claim.
- Validation target: operational feasibility at realistic bibliometric scale.
- Empirical signature: the method is demonstrated on the full intended network rather than only on a toy example.

## Uses in Science of Science

- Validates scalable use of [journal citation random walks](../methods/journal_citation_random_walk.md).
- Documents computational context for [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md).
- Complements [large-scale concept testing](../methods/large_scale_concept_testing.md) by focusing on algorithm execution feasibility.
- Supports [algorithm pseudocode disclosure](../methods/algorithm_pseudocode_disclosure.md).

## Operationalization

- Report the number of records, nodes, edges, or row groups processed.
- Report runtime and hardware context.
- Compare production scale with the scale used in validation.
- Note whether the method supports repeated updates or one-off computation only.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that the Eigenfactor computation used roughly 7,600 journals and 8.5 million citations.
- The paper notes that large networks require fast computation.
- It reports that the algorithm can run in seconds on a standard desktop machine, supporting a feasibility claim for routine journal-ranking production.

## Caveats

- A fast runtime does not validate the metric's construct meaning.
- Runtime claims depend on implementation details, data representation, and hardware.
- Small changes in coverage or edge construction can alter both runtime and results.

## Links

- [journal citation random walks](../methods/journal_citation_random_walk.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [large-scale concept testing](../methods/large_scale_concept_testing.md)
- [algorithm pseudocode disclosure](../methods/algorithm_pseudocode_disclosure.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `algorithmic_scalability_feasibility_claim`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: metric runtime feasibility; scalable bibliometric algorithm claim; production-scale algorithm validation
