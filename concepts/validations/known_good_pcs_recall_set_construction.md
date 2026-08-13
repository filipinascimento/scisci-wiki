# Known-good PCS recall set construction

## Summary

Known-good PCS recall set construction builds an independently adjudicated set of true patent citations to science so patent-paper matching algorithms can be tested for false negatives.

## Canonical Form

- Unit of analysis: sampled patent non-patent reference, scientific-reference label, findable paper, target publication backbone, known-good patent-paper pair, or recall threshold.
- Typical representation: manual recall gold set, adjudicated scientific-reference sample, findable-in-corpus subset, or threshold recall table.
- Validation target: estimate which true patent citations to science are missed by an automated matching pipeline.
- Empirical signature: algorithmic output is compared against a manually constructed set of patent-reference-to-paper links that was not used to tune the matcher.

## Uses in Science of Science

- Supplies the false-negative side of [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md).
- Complements [score-stratified match precision audit](score_stratified_match_precision_audit.md), which estimates false positives among output matches.
- Tests recall losses from [loose patent-reference candidate generation](../methods/loose_patent_reference_candidate_generation.md), [patent-reference year-token blocking](../methods/patent_reference_year_token_blocking.md), and [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md).
- Helps users choose [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md) settings with explicit recall evidence.

## Operationalization

- Draw a random sample of raw non-patent reference strings from the target patent corpus.
- Independently classify which references are scientific references rather than manuals, office actions, patent applications, web pages, or legal documents.
- Adjudicate disagreements before creating the recall set.
- Determine which scientific references are findable in the target publication backbone.
- Compare algorithmic matches against the known-good reference-paper pairs at each confidence threshold.
- Keep the known-good construction process independent from algorithm tuning where possible.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) uses a random sample of 1,000 unstructured non-patent references to create a known-good recall set.
- Multiple research assistants classified the sampled references, with training examples discarded from the test set.
- The adjudication retained 546 references as scientific references, and 501 of those were judged findable in Microsoft Academic Graph.
- Algorithm output was then compared with the 501 findable known-good references, producing cumulative recall estimates by confidence score.

## Caveats

- A known-good set depends on the publication backbone; a reference not findable in MAG might be findable in OpenAlex, Dimensions, PubMed, or Crossref.
- Manual classification can miss ambiguous scientific books, reports, standards, or working papers.
- The recall set must not be reused for uncontrolled iterative tuning without a held-out replacement.

## Links

- [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md)
- [score-stratified match precision audit](score_stratified_match_precision_audit.md)
- [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md)
- [loose patent-reference candidate generation](../methods/loose_patent_reference_candidate_generation.md)
- [patent-reference year-token blocking](../methods/patent_reference_year_token_blocking.md)
- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `known_good_pcs_recall_set_construction`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: PCS known-good recall set; patent-science recall gold set; known-good patent citation sample; patent-paper false-negative validation
