# Revived-classic benchmark alignment

## Summary

Algorithmic sleeping-beauty rankings can be checked against historically curated revived-classic lists to test whether trajectory measures recover recognizable delayed-recognition cases.

## Canonical Form

- Unit of analysis: delayed-recognition candidate list and external benchmark case set.
- Typical representation: overlap, rank positions, and missed-case audit.
- Validation target: agreement between continuous rankings and expert or literature-derived revived classics.
- Empirical signature: benchmark classics appear near the high end of the algorithmic delayed-recognition ranking.

## Uses in Science of Science

- Adds an external validation layer to [sleeping-beauty detection](../methods/sleeping_beauty_detection.md).
- Useful when a new delayed-recognition score is proposed for a field with known historical cases.
- Links trajectory scoring to historiographic case inventories rather than only internal null models.

## Operationalization

- Curate an external set of revived classics with transparent inclusion rules.
- Compute overlap, median rank, and near-miss cases in the algorithmic high-B list.
- Report field and time-period limits of the benchmark before treating nonoverlap as failure.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) compares beauty-coefficient rankings in physics with Redner's revived classics and finds many of those cases high in the ranking.
- The result shows how historically curated examples can validate a continuous delayed-recognition score.

## Caveats

- Benchmark lists inherit their own field, language, and threshold biases.
- High agreement with known cases does not prove the score captures all forms of delayed recognition.

## Links

- [Sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [Beauty coefficient](../measures/beauty_coefficient.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [Citation-model first-mover limit](citation_model_first_mover_limit.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `revived_classic_benchmark_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: revived classic validation; delayed-recognition benchmark alignment; historical sleeping-beauty benchmark
