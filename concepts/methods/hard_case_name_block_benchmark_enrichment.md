# Hard-case name-block benchmark enrichment

## Summary

Hard-case name-block benchmark enrichment deliberately overrepresents ambiguous name blocks in author-disambiguation evaluation so algorithms are tested on difficult cases rather than easy unique names.

## Canonical Form

- Unit of analysis: name block, author mention set, real-author count, benchmark inclusion threshold, or disambiguation task.
- Typical representation: minimum authors per block, minimum mentions per block, common-name sample, or hard-case benchmark.
- Method target: stress-test disambiguation under ambiguity that matters for downstream author-level inference.
- Empirical signature: a benchmark keeps name blocks with many real authors or mentions and excludes trivially separable cases.

## Uses in Science of Science

- Extends [name-block size complexity](../measures/name_block_size_complexity.md) from a descriptive measure into a benchmark design rule.
- Makes [common-name block bias](../validations/common_name_block_bias.md) explicit in evaluation sampling.
- Provides context for [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md), since enriched hard cases are not prevalence-weighted corpus averages.

## Operationalization

- Define inclusion thresholds for real authors, mentions, or name-block size.
- Report the largest and median name blocks in the benchmark.
- Compare algorithm performance in hard-case blocks against a population-weighted sample if both are available.
- State whether the benchmark is designed for stress testing, average deployment accuracy, or both.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) keeps blocks with at least five real-world authors and reports very large ambiguous blocks, including a large `y. wang` block.
- The design focuses evaluation on cases where author-name ambiguity creates meaningful disambiguation difficulty.
- This is a benchmark-construction motif, separate from the blocking algorithm itself.

## Caveats

- Hard-case enrichment can make reported performance look worse than population-average deployment performance.
- Easy-name cases still matter for estimating aggregate database quality.
- Thresholds chosen for one database or language distribution may not transfer.

## Links

- [name-block size complexity](../measures/name_block_size_complexity.md)
- [common-name block bias](../validations/common_name_block_bias.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [author-name blocking](author_name_blocking.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `hard_case_name_block_benchmark_enrichment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: ambiguous-name benchmark enrichment; hard-block disambiguation benchmark; common-name stress-test sampling
