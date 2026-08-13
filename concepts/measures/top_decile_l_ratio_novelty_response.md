# Top-decile L-ratio novelty response

## Summary

A flat-team outcome curve can be summarized as the probability that a paper reaches the top decile of novelty as L-ratio changes.

## Canonical Form

- Unit of analysis: paper, L-ratio percentile, novelty score, field-year baseline, or top-decile novelty flag.
- Typical representation: L-ratio percentile curve over top-10-percent novelty probability.
- Mechanism, measurement, or validation target: high-novelty response to team flatness.
- Empirical signature: top-10-percent novelty probability rises as L-ratio increases after controls.

## Uses in Science of Science

- Refines flat-team novelty measurement by linking it to [topic keyword embedding novelty](topic_keyword_embedding_novelty.md) and [novelty conventionality](../mechanisms/novelty_conventionality.md).
- Useful as a reusable check when [tail novelty](tail_novelty.md) is used in science-of-science inference.
- Creates cross-links to [highly novel paper class](highly_novel_paper_class.md) so the motif is not interpreted in isolation.

## Operationalization

- Compute topic-keyword embedding novelty for each paper.
- Threshold top-decile novelty within the chosen field-year or corpus baseline.
- Model top-novelty probability by L-ratio with team-size and career-age controls.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) reports in Figure 2 that top-10-percent novelty probability rises as L-ratio increases.
- The curve converts flatness into a tail-novelty response rather than only an average novelty score.

## Caveats

- Threshold choice, MAG keyword quality, and field-year normalization matter.
- Novelty is only one innovation outcome and may trade off with development or citation timing.

## Links

- [Topic-keyword embedding novelty](topic_keyword_embedding_novelty.md)
- [Novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [Tail novelty](tail_novelty.md)
- [Highly novel paper class](highly_novel_paper_class.md)
- [Lead-role ratio](lead_role_ratio.md)
- [Same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `top_decile_l_ratio_novelty_response`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: L-ratio novelty curve; top-novelty flat-team response; high-flatness novelty probability
